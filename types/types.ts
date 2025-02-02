export type User = {
    fullName: string;
    email: string;
    image: string;
};
export type Room = {
    userId: string; // Clerk user ID
    email: string; // User email
    role: "owner" | "member"; // Define roles explicitly
    createdAt: Date; // Timestamp when the room is created
    roomId: string; // Firestore document ID
};

// Make sure `CustomJwtSessionClaims` extends the correct type
export interface CustomJwtSessionClaims extends User {}
