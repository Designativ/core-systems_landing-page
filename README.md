# Universal Website Starter

A minimal, production-ready Next.js starter template that works for **any website type**. Clean, simple, and easy to extend.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Tech Stack

- **[Next.js 14+](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste component library
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** - Form handling and validation
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

## 📁 Project Structure

```
/src
  /app                 # Next.js App Router pages and layouts
    /api              # API routes
    layout.tsx        # Root layout
    page.tsx          # Homepage
    globals.css       # Global styles
  /components
    /ui               # shadcn/ui components
    /layout           # Header, Footer
    /shared           # Reusable components
  /lib
    /utils            # Utility functions (cn, etc.)
    constants.ts      # App constants
  /hooks              # Custom React hooks
  /types              # TypeScript type definitions
/public               # Static assets
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run dev:open` - Start dev server and open in browser
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🔗 Development URLs

The project is configured to provide clickable development URLs when working on files. The AI assistant will automatically provide links to pages you're working on.

**Default Development URL:** http://localhost:3000

**URL Mapping:**
- `src/app/page.tsx` → http://localhost:3000/
- `src/app/about/page.tsx` → http://localhost:3000/about
- `src/app/api/example/route.ts` → http://localhost:3000/api/example

You can customize the base URL by setting `NEXT_PUBLIC_APP_URL` in your `.env.local` file.

## 🎨 Customization

### Adding New Pages

Create new files in `/src/app`:

```typescript
// src/app/about/page.tsx
export default function AboutPage() {
  return <div>About Page</div>;
}
```

### Customizing Styles

- Global styles: Edit `src/app/globals.css`
- Tailwind config: Edit `tailwind.config.ts`
- Component styles: Use Tailwind utility classes

### Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add [component-name]
```

### Environment Variables

Copy `.env.example` to `.env.local` and update values:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=My Website
```

## 📝 Next Steps

### Adding Features

- **Authentication**: Add NextAuth.js or Clerk
- **Database**: Add Prisma, Supabase, or your preferred ORM
- **API Routes**: Create endpoints in `/src/app/api`
- **State Management**: Use Zustand stores in `/src/lib/stores`
- **Forms**: Use React Hook Form with Zod validation
- **Styling**: Customize Tailwind theme in `tailwind.config.ts`

### Deployment

This template is ready to deploy to [Vercel](https://vercel.com/) with zero configuration:

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy!

## 🎯 Design Philosophy

1. **Start Small** - Only what every website needs
2. **Easy to Extend** - Add features as you need them
3. **Not Opinionated** - No assumptions about your use case
4. **Production Ready** - Can deploy immediately
5. **Developer Friendly** - Clear structure, good DX

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Zustand Documentation](https://github.com/pmndrs/zustand)

## 📄 License

MIT

---

**Built with ❤️ for developers who want to start building, not configuring.**
