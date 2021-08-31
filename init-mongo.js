db = db.getSiblingDB('pht')
db.createUser(
	{
		user: "admin",
		pwd: "admin",
		roles: [
			{
				role: "readWrite",
				db: "pht"
			},
			{
				role: "dbAdmin",
				db: "pht"
			}
		],
		mechanisms: ["SCRAM-SHA-1"]
	}
)
db = db.getSiblingDB('metadatapersistence')
db.createUser(
	{
		user: "admin",
		pwd: "admin",
		roles: [
			{
				role: "readWrite",
				db: "pht"
			},
			{
				role: "dbAdmin",
				db: "pht"
			}
		],
		mechanisms: ["SCRAM-SHA-1"]
	}
)