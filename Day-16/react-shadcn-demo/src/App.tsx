import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Trigger Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Open Modal</button>
        </DialogTrigger>

        {/* Dialog Content */}
        <DialogContent className="bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-white">Modal Title</DialogTitle>
            <DialogDescription className="text-white">
              This is the modal content. Do you wish to continue?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700">Cancel</button>
            </DialogClose>
            <DialogClose asChild>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Confirm</button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
