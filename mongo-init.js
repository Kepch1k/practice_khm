db.createUser(
    {
        user: "mongoDB",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "db-dev"
            }
        ]
    }
);
