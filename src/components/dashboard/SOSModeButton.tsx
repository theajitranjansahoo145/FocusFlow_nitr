import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AlertTriangle, Shield, Clock } from 'lucide-react';

export function SOSModeButton() {
  const [open, setOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState<string>('3h');

  const durations = [
    { value: '3h', label: '3 hours from now' },
    { value: '6h', label: '6 hours from now' },
    { value: 'tomorrow', label: 'Tomorrow 8 AM' },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm" className="gap-2">
          <Shield className="h-4 w-4" />
          🆘 SOS Mode
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            EMERGENCY FOCUS MODE
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            This will block ALL distracting apps and enable maximum focus.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">This will:</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Block ALL distracting apps</li>
              <li>• Disable social media</li>
              <li>• Allow only study apps</li>
              <li>• Emergency calls only</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-foreground">Activate until:</h4>
            <div className="space-y-2">
              {durations.map((duration) => (
                <button
                  key={duration.value}
                  onClick={() => setSelectedDuration(duration.value)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                    selectedDuration === duration.value
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:bg-accent'
                  }`}
                >
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{duration.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>🔓 Emergency Unlocks: 3 (Use wisely!)</span>
          </div>

          <div className="bg-primary/10 p-3 rounded-lg">
            <p className="text-sm font-medium text-primary">
              🎯 Countdown to: JEE Exam - 45 days left! 💪
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setOpen(false)} className="flex-1">
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => setOpen(false)} className="flex-1">
            ACTIVATE SOS MODE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}