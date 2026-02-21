import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Zap, Star, ChevronRight, Mail } from "lucide-react";
import { useState } from "react";

/**
 * TATICROSS — Moda Fitness Feminina
 * Design Philosophy: Bold, energetic, premium fitness brand
 * - Dark background with vibrant accent colors (neon green/teal)
 * - Strong typography hierarchy
 * - Performance-focused messaging
 * - Aspirational imagery
 */

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur border-b border-green-500/20">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-black tracking-tighter">
            <span className="text-green-400">TATI</span>
            <span className="text-white">CROSS</span>
          </div>
          <div className="flex items-center gap-8">
            <button className="text-sm hover:text-green-400 transition">Coleções</button>
            <button className="text-sm hover:text-green-400 transition">Sobre</button>
            <button className="text-sm hover:text-green-400 transition">Contato</button>
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-green-400 transition" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
              <span className="text-green-400 text-sm font-semibold">✨ NOVA COLEÇÃO 2026</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 tracking-tighter">
              Poder que você <span className="text-green-400">sente</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Zero transparência. Alta compressão. Tecnologia premium. Cada peça TATICROSS é engenharia de performance para mulheres que não fazem concessões.
            </p>
            <div className="flex gap-4">
              <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg">
                Explorar Coleção <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-green-500/30 text-white hover:bg-green-500/10 px-8 py-6 text-lg">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-green-500/10">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8 text-green-400" />,
                title: "Alta Compressão",
                description: "Suporte muscular otimizado para máximo desempenho em qualquer atividade",
              },
              {
                icon: <Heart className="w-8 h-8 text-green-400" />,
                title: "Conforto Premium",
                description: "Tecidos respiráveis que acompanham cada movimento do seu corpo",
              },
              {
                icon: <Star className="w-8 h-8 text-green-400" />,
                title: "Durabilidade",
                description: "Qualidade que resiste a treinos intensos e lavagens frequentes",
              },
            ].map((feature, idx) => (
              <div key={idx} className="group">
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg w-fit group-hover:bg-green-500/20 transition">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-gradient-to-b from-transparent to-green-500/5">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Mais Vendidos</h2>
            <p className="text-gray-400 text-lg">As peças que as mulheres mais amam</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Legging Vibrance",
                category: "LEGGINGS",
                price: "R$ 159,90",
                badge: "Mais Vendido",
              },
              {
                name: "Top Vitalize",
                category: "TOPS",
                price: "R$ 109,90",
                badge: "Favorito",
              },
              {
                name: "Conjunto Impetuous",
                category: "CONJUNTOS",
                price: "R$ 229,90",
                badge: "Novo",
              },
            ].map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative mb-4 bg-gradient-to-br from-green-500/20 to-teal-500/20 aspect-square rounded-lg overflow-hidden border border-green-500/10 group-hover:border-green-500/30 transition">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">👗</div>
                      <p className="text-gray-400">{product.category}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                <p className="text-green-400 font-bold">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-6 text-lg">
              Ver Todas as Coleções
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-t border-green-500/10">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">O Que Dizem Nossas Clientes</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                ))}
              </div>
              <span className="text-gray-400">4.9 de 5 — +3.200 avaliações</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Melhor compra que já fiz! A compressão é perfeita e o conforto é incrível.",
              "Uso todos os dias. A qualidade é premium e dura muito. Recomendo!",
              "Finalmente encontrei uma marca que entende o que a gente precisa. Amei!",
            ].map((review, idx) => (
              <div key={idx} className="p-6 bg-green-500/5 border border-green-500/10 rounded-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-400 text-green-400" />
                  ))}
                </div>
                <p className="text-gray-300">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-green-500/10 to-teal-500/10 border-t border-green-500/10">
        <div className="container max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black mb-4">Fique por Dentro</h2>
            <p className="text-gray-400">
              Receba lançamentos exclusivos, promoções especiais e 10% OFF na primeira compra
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 bg-white/10 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500/50 transition"
              required
            />
            <Button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-3"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </form>

          {subscribed && (
            <p className="text-center text-green-400 mt-4 text-sm">
              ✅ Obrigada! Verifique seu email para confirmar.
            </p>
          )}

          <p className="text-center text-gray-500 text-xs mt-4">
            Sem spam. Cancele quando quiser.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-green-500/10 py-12 bg-black/50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-xl font-black mb-4">
                <span className="text-green-400">TATI</span>
                <span className="text-white">CROSS</span>
              </div>
              <p className="text-gray-400 text-sm">Moda fitness feminina com tecnologia premium</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Coleções</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-green-400 cursor-pointer transition">Leggings</li>
                <li className="hover:text-green-400 cursor-pointer transition">Tops</li>
                <li className="hover:text-green-400 cursor-pointer transition">Conjuntos</li>
                <li className="hover:text-green-400 cursor-pointer transition">Promoções</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-green-400 cursor-pointer transition">Sobre</li>
                <li className="hover:text-green-400 cursor-pointer transition">Contato</li>
                <li className="hover:text-green-400 cursor-pointer transition">Trabalhe Conosco</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-green-400 cursor-pointer transition">Política de Privacidade</li>
                <li className="hover:text-green-400 cursor-pointer transition">Termos de Uso</li>
                <li className="hover:text-green-400 cursor-pointer transition">Troca e Devolução</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-500/10 pt-8 flex items-center justify-between">
            <p className="text-gray-500 text-sm">© 2026 TATICROSS. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition">TikTok</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
