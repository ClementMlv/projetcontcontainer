db.auth('admin_user', 'admin_pass');
db = db.getSiblingDB('application_database');
db.createUser({
  utilisateur : 'utilisateur_application',
  mot de passe : 'application_pass',
  les rôles: [
    {
      rôle : 'dbOwner',
      db : 'application_database',
    },
  ],
});
