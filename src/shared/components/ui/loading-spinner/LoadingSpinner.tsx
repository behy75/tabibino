export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-t-transparent border-blue-600" />
    </div>
  );
}
