export default function Layout({ children}) {
  return (
    <div className='w-full max-w-4xl mx-auto'>
      <main>{children}</main>
    </div>
  );
}