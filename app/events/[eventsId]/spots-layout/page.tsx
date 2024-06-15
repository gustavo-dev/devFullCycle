async function SpostLayoutPage({
  params,
}: {
  params: { eventId: string };
}) {
    return <p>{params.eventId}</p>;
}


export default SpostLayoutPage;