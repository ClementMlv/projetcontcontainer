db.auth('admin_user', 'admin_pass');
rs.initier(
    {_id : "rs1", version : 1,
        membres: [
            { _id : 0, hôte : "mongodb_server_lynx:27017" },
            { _id : 1, hôte : "mongodb_server_puma:27017" },
            { _id : 2, hôte : "mongodb_server_wolf:27017" }
        ]
    }
);
