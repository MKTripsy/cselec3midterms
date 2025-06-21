export default function Students() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="http://localhost:3000/"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Students
          </a>
        </div>
  <p>Students Page</p>
  </main>
  );
}