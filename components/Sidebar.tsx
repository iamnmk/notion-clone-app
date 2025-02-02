import { MenuIcon } from "lucide-react"
import NewDocumentButton from "./NewDocumentButton"
import {useCollection} from "react-firebase-hooks/firestore"
import { DocumentData, collectionGroup, query, where } from "firebase/firestore"
import { db } from "@/firebase"
import { useUser } from "@clerk/nextjs"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "./ui/sheet"
import { useEffect } from "react"

interface RoomDocument extends DocumentData{
    createdAt: string;
    role: "owner" | "editor";
    roomId: string;
    userId: string;
}

function Sidebar() {
    const {user} = useUser();
    const [data, loading , error] = useCollection(
    user && 
        query (collectionGroup(db, 'rooms'), where('userId', '==', user.emailAddresses[0].toString())

    )
    );

    useEffect (()=>{
        if (!data) return;
        const grouped = data.docs.reduce<{
            owner: RoomDocument[];
            editor: RoomDocument[];
        }>
    
    }, [data])




    const menuOptions = (
    <>
    <NewDocumentButton/>
    </>
    );  
    return (
    <div className = "p-2 md: p-5 bg-gray-200 relative">
        <div className="md:hidden">
        <Sheet>
  <SheetTrigger>
    <MenuIcon/>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <div>
      {menuOptions}
      </div>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

        <div className = "hidden md:inline">{menuOptions}
        
    </div>
    </div>
    
  )
}

export default Sidebar