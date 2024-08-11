import AuthForm from "@/components/auth-form";

//searchParams is a reserved prop which contains an object with query parameters
export default async function Home({ searchParams }) {
  const formMode = searchParams.mode || "login";

  return <AuthForm mode={formMode} />;
}
