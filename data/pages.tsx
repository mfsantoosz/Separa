import {
  LayoutDashboard,
  Package,
  Layers,
  Truck,
  Archive,
  Users,
  ChartBar,
  Sparkle,
  Bell,
  Paintbrush,
  UserCircle,
  CreditCard,
  Settings,
} from "lucide-react"

export const pages = [
  // Main Navigation
  {
    title: "Painel",
    description: "Visualize os principais indicadores e acompanhe a operação em tempo real.",
    url: "/dashboard",
    icon: <LayoutDashboard />,
    group: "main",
  },
  {
    title: "Pedidos",
    description: "Gerencie todos os pedidos realizados pela operação.",
    url: "/orders",
    icon: <Package />,
    group: "main",
  },
  {
    title: "Operação",
    description: "Organize e acompanhe o fluxo operacional da empresa.",
    url: "/operation",
    icon: <Layers />,
    group: "main",
  },
  {
    title: "Entregas",
    description: "Acompanhe o andamento e o histórico das entregas.",
    url: "/deliveries",
    icon: <Truck />,
    group: "main",
  },
  {
    title: "Estoque",
    description: "Controle produtos, entradas, saídas e disponibilidade.",
    url: "/inventory",
    icon: <Archive />,
    group: "main",
  },
  {
    title: "Clientes",
    description: "Gerencie clientes e consulte suas informações.",
    url: "/costumers",
    icon: <Users />,
    group: "main",
  },
  {
    title: "Análises",
    description: "Visualize métricas, gráficos e relatórios da operação.",
    url: "/analytics",
    icon: <ChartBar />,
    group: "main",
  },
  {
    title: "Assistente IA",
    description: "Utilize inteligência artificial para agilizar tarefas e análises.",
    url: "/assistant",
    icon: <Sparkle />,
    group: "main",
  },

  // Secondary
  {
    title: "Notificações",
    description: "Visualize avisos e atualizações importantes.",
    url: "/notifications",
    icon: <Bell />,
    group: "secondary",
  },
  {
    title: "Design System",
    description: "Consulte componentes, cores e padrões visuais do projeto.",
    url: "/design",
    icon: <Paintbrush />,
    group: "secondary",
  },

  // User Menu
  {
    title: "Conta",
    description: "Gerencie suas informações pessoais e preferências.",
    url: "/account",
    icon: <UserCircle />,
    group: "user",
  },
  {
    title: "Cobrança",
    description: "Visualize pagamentos, assinaturas e métodos de cobrança.",
    url: "/billing",
    icon: <CreditCard />,
    group: "user",
  },

  // Settings
  {
    title: "Configurações",
    description: "Personalize as configurações gerais da plataforma.",
    url: "/adjustments",
    icon: <Settings />,
    group: "tertiary",
  },
]