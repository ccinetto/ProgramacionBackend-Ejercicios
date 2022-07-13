import Config from '../config';
import mongoose, { Connection } from 'mongoose';

mongoose.Promise = global.Promise;

//https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/

export class MongoDB {
  private instance: number;
  private uri: string;
  private connection?: Connection;

  constructor(local?: boolean) {
    this.uri = local ? Config.MONGO_LOCAL_URL : Config.MONGO_ATLAS_SRV;
    this.instance = 0;
  }

  getConnection() {
    if (!this.connection) this.connection = mongoose.createConnection(this.uri);
    return this.connection;
  }
}
