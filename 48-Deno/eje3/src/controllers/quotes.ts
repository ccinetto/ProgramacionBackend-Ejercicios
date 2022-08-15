import { Context, helpers, Bson } from '../../deps.ts';
import { Quote, QuotesModel } from '../models/quotes.ts';

export const getQuotes = async (ctx: Context) => {
  const { response } = ctx;
  const { id } = helpers.getQuery(ctx, { mergeParams: true });

  const theId = id ? new Bson.ObjectId(id) : undefined;

  try {
    let output;

    const allQuotes = await QuotesModel.find(
      { _id: theId },
      { noCursorTimeout: false }
    ).toArray();

    response.status = 200;
    response.body = {
      success: true,
      data: allQuotes,
    };
  } catch (err) {
    console.log('ERROR');
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export const addQuote = async (ctx: Context) => {
  const { response, request } = ctx;
  try {
    const body = await request.body();

    const quote: Quote = await body.value;
    await QuotesModel.insertOne(quote);
    response.status = 201;
    response.body = {
      success: true,
      data: quote,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export const updateQuote = async (ctx: Context) => {
  const { request, response } = ctx;
  const { id } = helpers.getQuery(ctx, { mergeParams: true });

  try {
    const body = await request.body();
    const inputQuote = await body.value;

    await QuotesModel.updateOne(
      { _id: new Bson.ObjectId(id) },
      { $set: { quote: inputQuote.quote, author: inputQuote.author } }
    );
    const updatedQuote = await QuotesModel.findOne(
      { _id: new Bson.ObjectId(id) },
      {
        noCursorTimeout: false,
      } as any
    );
    response.status = 200;
    response.body = {
      success: true,
      data: updatedQuote,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export const deleteQuote = async (ctx: Context) => {
  const { request, response } = ctx;
  try {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });

    await QuotesModel.deleteOne({ _id: new Bson.ObjectId(id) });

    response.status = 201;
    response.body = {
      success: true,
      msg: 'Quote deleted',
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};
