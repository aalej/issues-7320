interface HomeProps {
  searchParams: {
    tab?: string;
    title?: string;
  };
}

export default function Home({ searchParams }: HomeProps) {
  const title = searchParams.title;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Title: {title}
    </main>
  );
}
