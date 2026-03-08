import { GRADE_6_CURRICULUM } from "@/lib/curriculum";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Calculator, BookOpen, Brain, BarChart3, Lightbulb, ChevronRight } from "lucide-react";

const domainIcons: Record<string, React.ReactNode> = {
  "rp": <Calculator className="w-6 h-6" />,
  "ns": <Brain className="w-6 h-6" />,
  "ee": <Lightbulb className="w-6 h-6" />,
  "g": <BookOpen className="w-6 h-6" />,
  "sp": <BarChart3 className="w-6 h-6" />,
};

const domainColors: Record<string, string> = {
  "rp": "bg-blue-500",
  "ns": "bg-purple-500",
  "ee": "bg-green-500",
  "g": "bg-orange-500",
  "sp": "bg-pink-500",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero */}
      <header className="bg-white border-b px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📚</span>
            <h1 className="text-3xl font-bold text-slate-900">Math Learn</h1>
          </div>
          <p className="text-xl text-slate-600 mb-2">
            6th Grade California Common Core Mathematics
          </p>
          <p className="text-slate-500">
            Master {GRADE_6_CURRICULUM.length} domains with {GRADE_6_CURRICULUM.reduce((acc, d) => acc + d.topics.length, 0)} topics
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid gap-6">
          {GRADE_6_CURRICULUM.map((domain) => (
            <Card key={domain.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className={`${domainColors[domain.id]} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {domainIcons[domain.id]}
                    <div>
                      <CardTitle className="text-lg">{domain.name}</CardTitle>
                      <CardDescription className="text-white/80">{domain.code}</CardDescription>
                    </div>
                  </div>
                  <span className="text-2xl font-bold">{domain.topics.length}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm text-slate-600 mb-4">{domain.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">{domain.topics.length} topics</span>
                    <span className="text-slate-400">0% complete</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
                
                <Link href={`/topics/${domain.id}`}>
                  <Button className="w-full mt-4" variant="outline">
                    Explore Topics
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold text-blue-900">Quick Quiz</h3>
              <p className="text-sm text-blue-700">Random questions</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="pt-6">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold text-green-900">My Progress</h3>
              <p className="text-sm text-green-700">Track learning</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
