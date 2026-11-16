// Tipagem local das tabelas de materiais (supabase/migrations/20261116120000_materiais.sql).
// O arquivo src/integrations/supabase/types.ts é gerado pelo Lovable Cloud e não deve ser
// editado à mão; quando ele for regenerado após a migration, este arquivo pode ser removido.

export type MaterialRow = {
  id: string;
  slug: string;
  titulo: string;
  descricao: string | null;
  palavra_chave: string | null;
  arquivo_path: string;
  capa_url: string | null;
  ativo: boolean;
  created_at: string;
  updated_at: string;
};

export type MaterialLeadRow = {
  id: string;
  material_id: string;
  nome: string;
  whatsapp: string;
  email: string;
  consentimento_material: boolean;
  consentimento_novidades: boolean;
  politica_versao: string;
  ip: string | null;
  user_agent: string | null;
  origem: string | null;
  created_at: string;
  updated_at: string;
};

export type MaterialLeadInsert = {
  material_id: string;
  nome: string;
  whatsapp: string;
  email: string;
  consentimento_material: boolean;
  consentimento_novidades: boolean;
  politica_versao: string;
  ip: string | null;
  user_agent: string | null;
  origem: string | null;
};

export type MateriaisDatabase = {
  __InternalSupabase: { PostgrestVersion: "14.1" };
  public: {
    Tables: {
      materiais: {
        Row: MaterialRow;
        Insert: Partial<MaterialRow> &
          Pick<MaterialRow, "slug" | "titulo" | "arquivo_path">;
        Update: Partial<MaterialRow>;
        Relationships: [];
      };
      material_leads: {
        Row: MaterialLeadRow;
        Insert: MaterialLeadInsert &
          Partial<Pick<MaterialLeadRow, "id" | "created_at" | "updated_at">>;
        Update: Partial<MaterialLeadRow>;
        Relationships: [
          {
            foreignKeyName: "material_leads_material_id_fkey";
            columns: ["material_id"];
            isOneToOne: false;
            referencedRelation: "materiais";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: { [_ in never]: never };
    CompositeTypes: { [_ in never]: never };
  };
};
