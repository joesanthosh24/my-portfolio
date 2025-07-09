import { ThemeToggle } from "../../components/theme-toggle/theme-toggle.component"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle />
    </div>
}