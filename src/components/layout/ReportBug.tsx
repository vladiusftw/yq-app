import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { IconBugFilled } from '@tabler/icons-react'

const ReportBug = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="icon"
                    className="bg-destructive hover:bg-destructive/80 fixed bottom-4 end-4 rounded-full"
                >
                    <IconBugFilled />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Report a Bug</DialogTitle>
                    <DialogDescription>
                        {"We'll get back to you shortly!"}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid w-full gap-3">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea
                        placeholder="Type your message here."
                        id="message"
                    />
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant={'outline'}>Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button type="submit">Send</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ReportBug
