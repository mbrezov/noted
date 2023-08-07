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
  return data.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <Navbar />
      <div className={styles.notes_container}>
        {notes?.map((note) => {
          return <NoteCard key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}

export interface Data {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Item[];
}

export interface Item {
  category: string;
  collectionId: string;
  collectionName: string;
  content: string;
  created: string;
  expand: Expand;
  id: string;
  title: string;
  updated: string;
}

export interface Expand {
  category: Category;
}

export interface Category {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  name: string;
  updated: string;
}
