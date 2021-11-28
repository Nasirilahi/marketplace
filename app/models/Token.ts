import Realm from 'realm';

class Token {
  _id!: Realm.BSON.ObjectId;
  token!: string;

  static generate(token: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      token,
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'Token',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      token: 'string',
    },
  };
}

export default Token;
