import "@clerk/nextjs";

declare module "@clerk/nextjs/server" {
    interface Auth {
        sessionClaims: CustomJwtSessionClaims;
    }
}

declare global {
    interface CustomJwtSessionClaims {
        fullName: string;
        email: string;
    }
}

