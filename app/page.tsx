import React from "react";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl text-muted-foreground">Homepage</h1>
      <Button variant="outline" size="lg" className="capitalize m-8">
        test button
      </Button>
    </div>
  );
};

export default HomePage;
