import Dexie, { liveQuery } from "dexie";

const db = new Dexie("c25DB");
db.version(1).stores({
    tasks: "++id, name, notionRef",
    session: "++id, date, task, duration, condition"
});

export async function addTask(name, notionRef) {
    try {
        return await db.tasks.add({ name: name, notionRef: notionRef });
    } catch(error) {
        alert(error.message)
    }
};

export function getTaskStore() {
    return liveQuery(() => db.tasks.toArray());
};

export async function addSession(date, task, duration, condition) {
    return await db.session.add({ date: date, task: task, duration: duration, condition: condition });
};

export function getSessionStore() {
    return liveQuery(() => db.session.toArray());
}