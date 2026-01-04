import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function UpdateTodoDialog({ open, onClose, onSave, initialTitle }) {
  const [title, setTitle] = useState(initialTitle || "");
  useEffect(() => setTitle(initialTitle || ""), [initialTitle]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Todo Title</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={() => onSave(title)} disabled={!title.trim()}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
