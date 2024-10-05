export default function Page({ params }: { params: { id: string } }) {
  return <div>restaurant: {params.id}</div>;
}
