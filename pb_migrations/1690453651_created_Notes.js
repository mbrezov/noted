migrate((db) => {
  const collection = new Collection({
    "id": "rfa68bu8eofyou6",
    "created": "2023-07-27 10:27:31.057Z",
    "updated": "2023-07-27 10:27:31.057Z",
    "name": "Notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ogbcsscq",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0krdgoos",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rfa68bu8eofyou6");

  return dao.deleteCollection(collection);
})
