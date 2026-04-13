"use client";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

export default function EmptyExam() {
  const router = useRouter();
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Empty State Illustration */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 dark:from-zinc-800 dark:to-zinc-700 rounded-3xl flex items-center justify-center shadow-lg">
            <FileText className="w-12 h-12 text-slate-400 dark:text-zinc-500" />
          </div>
        </div>

        {/* Empty State Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            No Exams Available
          </h1>

          <p className="text-lg text-slate-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
            It looks like there are no exams available for this diploma at the
            moment. Please check back later or contact your instructor for more
            information.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => router.back()}
              className="bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-600 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-700 rounded-xl font-medium px-6 py-3"
            >
              Go Back
            </Button>

            <Button
              onClick={() => router.push("/all-exams")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-zinc-700 dark:to-zinc-600 dark:hover:from-zinc-600 dark:hover:to-zinc-500 text-white rounded-xl font-medium px-6 py-3"
            >
              Browse All Diplomas
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-700">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <FileText className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                What&apos;s Next?
              </h3>
              <ul className="text-sm text-slate-600 dark:text-zinc-400 space-y-2">
                <li>• Check if exams have been scheduled for a later date</li>
                <li>• Contact your instructor for exam availability</li>
                <li>• Browse other available diplomas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
