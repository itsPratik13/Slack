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
import { TriangleAlert } from "lucide-react";
import { useAuthActions } from "@convex-dev/auth/react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}

export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const { signIn } = useAuthActions();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pending, SetPending] = useState(false);
  const[error,setError]=useState("");

  const OnProviderSignUp = (value: "github" | "google") => {
    SetPending(true);
    signIn(value).finally(() => {
      SetPending(false);
    });
  };
  const onPasswordSignUp=(e:React.FormEvent<HTMLFormElement>)=>{

    e.preventDefault();
    if(password!==confirmpassword){
      setError("Passwords don't match");
      return;
    }
    SetPending(true);
    signIn(password,{email,password,flow:"signUp"})
    .catch(()=>{
      setError("Something went wrong!")
    }).finally(()=>{
      SetPending(false);
    })

  }
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
      {!!error && (
   <div className="bg-destructive/15 p-3 rounded-md flex items-center text-sm text-destructive gap-x-2 mb-6">
       <TriangleAlert className="h-4 w-4"/>
       <p>{error}</p>
   </div>
 )}

      <CardContent className="space-y-5 px-0 pb-0">
        <form  onSubmit={onPasswordSignUp} className="space-y-2.5">
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <Input
            disabled={pending}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            required
          />
          <Input
            disabled={pending}
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
            disabled={pending}
            variant="slack"
          >
            Continue
          </Button>
        </form>
      </CardContent>
      <Separator className="my-4" />

      <div className="flex flex-col gap-y-2.5">
        <Button
          disabled={pending}
          onClick={() => OnProviderSignUp("google")}
          variant="outline"
          size="lg"
          className="w-full relative"
        >
          <FcGoogle className="size-5 absolute left-3 top-2.5" />
          Continue with Google
        </Button>

        <Button
          disabled={pending}
          onClick={() => OnProviderSignUp("github")}
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
