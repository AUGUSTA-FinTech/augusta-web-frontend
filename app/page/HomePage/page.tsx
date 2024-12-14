"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";

import {
  Smartphone,
  CreditCard,
  TrendingUp,
  Shield,
  ArrowRight,
  Wallet,
  Building,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-800 text-white">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="text-2xl font-bold"
          >
            OltraPay
          </button>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="hover:text-blue-200">
              Solutions
            </Link>
            <Link href="#" className="hover:text-blue-200">
              Business
            </Link>
            <Link href="/page/AboutUs" className="hover:text-blue-200">
              About
            </Link>
            <Link
              href="/page/ContactPage"
              className="hover:text-blue-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-blue-800 md:hidden p-4 space-y-4 z-50">
              <Link href="#" className="block hover:text-blue-200 py-2">
                Solutions
              </Link>
              <Link href="#" className="block hover:text-blue-200 py-2">
                Business
              </Link>
              <Link
                href="/page/AboutUs"
                className="block hover:text-blue-200 py-2"
              >
                About
              </Link>
              <Link
                href="/page/ContactPage"
                className="block hover:text-blue-200 py-2 font-semibold"
              >
                Contact
              </Link>
            </div>
          )}

          <Button variant="secondary" className="hidden md:flex">
            Get Started
          </Button>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Cash into Digital Freedom
            </h1>
            <p className="text-xl mb-8">
              Join the digital payment revolution with OltraPay. We&apos;re
              making cashless transactions accessible, secure, and seamless for
              everyone.
            </p>

            {/* Action Buttons */}
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 w-full md:w-auto mb-4 md:mb-0"
              >
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-blue-700 w-full md:w-auto"
              >
                Learn More
              </Button>
            </div>

            {/* App Store Buttons */}
            <div className="mt-12 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
              <Button className="bg-black text-white hover:bg-gray-900 flex items-center justify-center space-x-2 py-6">
                <FaApple />

                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Button>

              <Button className="bg-black text-white hover:bg-gray-900 flex items-center justify-center space-x-2 py-6">
                <FcGoogle />

                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section with Gradient Background */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose OltraPay
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4 pt-6">
                <Smartphone className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">Mobile-First Payments</h3>
                <p className="text-gray-600">
                  Transform your smartphone into a powerful payment tool. Send,
                  receive, and manage money instantly.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4 pt-6">
                <Shield className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">Bank-Grade Security</h3>
                <p className="text-gray-600">
                  Your money is protected with advanced encryption and
                  multi-factor authentication.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm">
              <CardContent className="space-y-4 pt-6">
                <TrendingUp className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
                <p className="text-gray-600">
                  Track your spending patterns and manage your finances with
                  detailed insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-bl from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Complete Digital Payment Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Wallet className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Wallet</h3>
                  <p className="text-gray-600">
                    Store, manage, and spend your money digitally with our
                    secure wallet solution.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CreditCard className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Contactless Payments
                  </h3>
                  <p className="text-gray-600">
                    Pay seamlessly at stores with just a tap of your phone.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Building className="h-8 w-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Business Solutions
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive payment solutions for businesses of all sizes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Ready to go cashless?</h3>
              <p className="text-gray-600 mb-8">
                Join thousands of businesses and individuals who have already
                transformed their payment experience with OltraPay.
              </p>
              <Button className="w-full">Get Started Today</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">OltraPay</h4>
              <p className="text-gray-400">
                Transforming the future of payments, one transaction at a time.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Personal</li>
                <li>Business</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 OltraPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
