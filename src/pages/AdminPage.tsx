"use client";

import React from "react";
import EditHeroForm from "@/components/admin/EditHeroForm";
import EditTjansterForm from "@/components/admin/EditTjansterForm";
import LogoutButton from "@/components/LogoutButton";

const AdminPage: React.FC = () => {
  return (
    <div className="p-6 space-y-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Adminpanel</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🟦 Redigera startsidans Hero (blåa delen)
        </h2>
        <EditHeroForm />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          🟩 Redigera "Tjänster" sida
        </h2>
        <EditTjansterForm />
      </section>

      <div className="flex justify-end pt-10">
        <LogoutButton />
      </div>
    </div>
  );
};

export default AdminPage;
