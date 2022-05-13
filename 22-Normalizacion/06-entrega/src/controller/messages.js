import { normalize, schema } from 'normalizr';
import { MessageModel } from '../models/messages';

const author = new schema.Entity('author', {}, { idAttribute: 'email' });

const msge = new schema.Entity(
  'message',
  {
    author: author,
  },
  { idAttribute: '_id' }
);

const msgesSchema = new schema.Array(msge);

export const addMessage = async (msge) => {
  let messageToSave = await new MessageModel(msge);
  let savedMessage = await messageToSave.save();
  return savedMessage;
};

export const getAllMessages = async () => {
  try {
    //El lean le dice a mongoose que solo queremos un simple objeto como respuesta
		const messagesOriginalData = await MessageModel.find().lean();

    let normalizedMessages = normalize(messagesOriginalData, msgesSchema);

    return normalizedMessages;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
};


