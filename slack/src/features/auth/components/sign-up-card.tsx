import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { SignInFlow } from "../types";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  return (
    <Card className="h-full w-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle className="font-bold text-2xl">
          Sign Up to continue
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5 px-0 pb-0">
        <form className="space-y-2.5">
          <Input
            disabled={false}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Input
            disabled={false}
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            type="password"
            required
          />
          <Button
            type="submit"
            className="w-full "
            size="lg"
            disabled={false}
            variant="slack"
          >
            Continue
          </Button>
        </form>
      </CardContent>
      <Separator className="my-4" />

      <div className="flex flex-col gap-y-2.5">
        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative"
        >
          <FcGoogle className="size-5 absolute left-3 top-2.5" />
          Continue with Google
        </Button>

        <Button
          disabled={false}
          onClick={() => {}}
          variant="outline"
          size="lg"
          className="w-full relative"
        >
          <FaGithub className="size-5 absolute left-3 top-2.5" />
          Continue with Github
        </Button>
      </div>
      <p className=" my-3 text-sx text-muted-foreground">
        Already have an account?{" "}
        <span
          onClick={() => setState("signIn")}
          className="text-sky-700 hover:underline cursor-pointer"
        >
          SignIn!
        </span>
      </p>
    </Card>
  );
};
