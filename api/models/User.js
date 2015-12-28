var User = {
  // Enforce model schema in the case of schemaless databases
  attributes: {
   username  : { type: 'string', unique: true },
   email     : { type: 'string',  unique: true },
   passports : { collection: 'Passport', via: 'user' }
  }

//attributes added according to mysql Users table
  /*tableName: 'users',
  connection:'TestDB',
  autoCreatedAt:false,
  autoUpdatedAt:false,
  schema: true,

  attributes: {
    loginid:{
      type:'string',
      required:true
    },
    password:{
      type:'string',
      required:true
    },
    passports : {
      collection: 'Passport',
      via: 'user'
    },
    toJSON: function() {
      var obj = this.toObject();
      delete obj.password;
      return obj;
    }
  }*/
};

module.exports = User;
