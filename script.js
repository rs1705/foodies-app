import Database from "better-sqlite3";

const db = new Database("meals.db");

function deleteMealById(id) {
  const stmt = db.prepare("DELETE FROM meals WHERE id = ?");
  const result = stmt.run(id);
  console.log(`Deleted ${result.changes} row(s) with id=${id}`);
}

// function to delete by name (optional)
function deleteMealByName(name) {
  const stmt = db.prepare("DELETE FROM meals WHERE title = ?");
  const result = stmt.run(name);
  console.log(`Deleted ${result.changes} row(s) with name='${name}'`);
}

// ✅ try it out
deleteMealByName("22");
deleteMealByName("asdfjkj");
deleteMealByName("adsf");
deleteMealByName("abc");
