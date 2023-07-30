migrate((db) => {
  const collection = new Collection({
    "id": "c1oedd8ymdcwzij",
    "created": "2023-07-30 11:47:20.084Z",
    "updated": "2023-07-30 11:47:20.084Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "m0is7qek",
        "name": "category",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("c1oedd8ymdcwzij");

  return dao.deleteCollection(collection);
})
