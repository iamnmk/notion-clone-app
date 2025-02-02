'use server';
import { adminDb } from "@/firebase-admin";
import { auth } from "@clerk/nextjs/server";

export async function createNewDocument() {
    const authData = await auth(); // ✅ Ensure we await auth() before accessing properties
    const sessionClaims = authData.sessionClaims as CustomJwtSessionClaims; // ✅ Explicitly cast sessionClaims
    
    // If you no longer need email, just remove the check for email.
    const userId = authData.userId; // Directly use userId

    // Create a new document in Firestore
    const docCollectionRef = adminDb.collection("documents");
    const docRef = await docCollectionRef.add({
        title: "New Doc"
    });

    await adminDb.collection("users").doc(sessionClaims?.email!).collection("rooms").doc(docRef.id).set(
        {
            userId,
            role: "owner",
            createdAt: new Date(),
            roomId: docRef.id,
        },
        { merge: true } // Prevents overwriting existing data
    );

    return { docId: docRef.id };
}



