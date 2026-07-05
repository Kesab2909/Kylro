import { Plus } from "lucide-react";
import { OrganizationProfile } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const InviteButton = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" size="sm" className="uppercase tracking-luxury text-[10px]">
        <Plus className="h-3 w-3 mr-1.5" />
        Invite
      </Button>
    </DialogTrigger>
    <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
      <OrganizationProfile />
    </DialogContent>
  </Dialog>
);
