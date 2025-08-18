import React, { Suspense } from "react";
import SubjectList from "./_components/subject-list";
import UserInfo from "./_components/user-Info";
import { useTranslations } from "next-intl";

export default function Page() {
  // Translations
  const t = useTranslations();
  return (
    <>
      {/* User info */}
      <UserInfo />
      <section className="bg-white mt-16  px-4 rounded-3xl shadow-cardShadow">
        <div className="flex justify-between py-4 px-4">
          <span className="text-2xl font-semibold text-main">
            {t("quizes")}
          </span>
        </div>
        {/* <SearchResult /> */}
        <section className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 ">
          {/* subjects */}
          <Suspense fallback="loading subjects.....">
            <SubjectList />
          </Suspense>
        </section>
      </section>
    </>
  );
}
