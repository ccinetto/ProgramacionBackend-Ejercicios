import * as util from 'util';
import { normalize, schema } from 'normalizr';
import { MessageModel } from '../models/messages';

export const addMessage = async (msge) => {
  let savedMessage = await MessageModel.create(msge);
  return savedMessage;
};

const author = new schema.Entity('author', {}, { idAttribute: 'email' });

const msge = new schema.Entity(
  'message',
  {
    author: author,
  },
  { idAttribute: '_id' }
);

const msgesSchema = new schema.Array(msge);


export const getAllMessages = async () => {
  try {
    //El lean le dice a mongoose que solo queremos un simple objeto como respuesta
		const messagesOriginalData = await MessageModel.find().lean();

    let normalizedMessages = normalize(messagesOriginalData, msgesSchema);

    console.log(util.inspect(normalizedMessages, true, 3, true));
    return normalizedMessages;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
};


