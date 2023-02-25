import { Form } from "@/components";
import { useSession } from "next-auth/react";
import { SignIn, SignOut } from "@/lib/actions";

export default function GuestbookPage() {
  const { data: session } = useSession();
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Guestbook</h1>
      {session?.user ? (
        <>
          <Form />
          <SignOut />
        </>
      ) : (
        <SignIn />
      )}
      {/* {entries.map((entry) => (
        <div key={entry.id} className="flex flex-col space-y-1 mb-4">
          <div className="w-full text-sm">
            <span className="text-neutral-600 dark:text-neutral-400 mr-1">
              {entry.created_by}:
            </span>
            {entry.body}
          </div>
        </div>
      ))} */}
    </section>
  );
}

// export async function getServerSideProps(ctx) {
//   const session = await getSession(ctx);
//   return {
//     props: {
//       session,
//     },
//   };
// }
