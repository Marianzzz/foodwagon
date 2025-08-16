import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Search } from "lucide-react"
import { Input } from "./ui/input"

export default function SearchMobile() {

    return <div className="flex md:hidden">
        <AlertDialog>
            <AlertDialogTrigger className="border-none"><Search className="text-[#FFB30E] hover:opacity-60 cursor-pointer" /></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Пошук їжі</AlertDialogTitle>
                    <Input className="font-bold text-[#424242]" />

                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Відмінити</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
}

