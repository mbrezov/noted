import PocketBase from "pocketbase";
import styles from "./NoteCard.module.scss";
import NoteCard from "./NoteCard";
import Navbar from "./Navbar";

const pb = new PocketBase("https://noted.pockethost.io");

async function getNotes() {
  const res = await fetch(
    "https://noted.pockethost.io/api/collections/notes/records?expand=category",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

// // expand: "category",
// async function getNotes() {
//   const notes = await pb.collection("Notes").getFullList({
//     sort: "-created",
//     expand: "category",
//   });
//   return notes as any[];
// }

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <Navbar />
      <div className={styles.notes_container}>
        {notes?.map((note) => {
          // console.log(note);
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, expand } = note || {};

  return (
    <NoteCard title={title} content={content} category={expand.category.name} />
  );
}
