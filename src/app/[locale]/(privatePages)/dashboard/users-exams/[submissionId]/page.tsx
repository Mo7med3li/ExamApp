import { getUserSubmissionDetails } from "./_api/detailed-result";
import SubmissionDetailed from "./_components/submission-detailed";

export default async function SubmissionPage({
  params,
}: {
  params: { submissionId: string };
}) {
  const data = await getUserSubmissionDetails(params.submissionId);
  return (
    <div>
      <SubmissionDetailed
        submission={data.payload.submission}
        analytics={data.payload.analytics}
      />
    </div>
  );
}
