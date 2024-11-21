# AI App Boilerplate

## Giới thiệu

Đây là một boilerplate để xây dựng ứng dụng AI với giao diện chat hoặc completion, hỗ trợ nhiều model AI khác nhau như OpenAI, Anthropic Claude và Google Gemini.

Bản quyền thuộc về team [Học Code AI](https://hoccodeai.com).

## Tính năng chính

- 💬 Giao diện chat để tương tác với AI
- ✨ Chế độ completion cho phản hồi một lần
- 🎨 Giao diện đẹp mắt sử dụng shadcn/ui
- 🚀 Xây dựng bằng Astro cho hiệu suất tối ưu
- 📱 Thiết kế responsive
- 🔒 Xử lý API endpoint an toàn cho tương tác AI


## Huớng dẫn cài đặt và sử dụng

1. Clone repository về máy:
```bash
git clone <repository-url>
cd ai-app-boilerplate
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
```

3. Copy file `.env.example` thành `.env` và thêm API key cho model AI bạn muốn sử dụng. Chỉ cần 1 trong 3 model là đuợc.

```bash
cp .env.example .env
```

```bash
OPENAI_API_KEY=sk-xxx
# hoặc
ANTHROPIC_API_KEY=sk-ant-xxx
# hoặc
GOOGLE_API_KEY=xxx
```

4. Chạy development server:
```bash
npm run dev
# hoặc
yarn dev
```

## Cách sử dụng

### 1. Chọn chế độ tương tác

Ứng dụng có 2 chế độ chính:

- **Chat Mode**: Cho phép chat nhiều lượt qua lại với AI:

    Tính năng:

    - Hội thoại nhiều lượt
    - Lưu trữ lịch sử chat
    - Tương tác phức tạp cần ngữ cảnh từ các tin nhắn trước
    - Hỗ trợ markdown phong phú với code syntax highlight

    Phù hợp cho:
    - Tương tác, thảo luận mở rộng
    - Giải thích phức tạp cần trao đổi qua lại
    - Bất kỳ tình huống nào cần ngữ cảnh từ các tin nhắn trước


- **Completion Mode**: Cho tương tác đơn lẻ một câu hỏi - một câu trả lời:

    Tính năng:

    - Tương tác một lượt (một câu hỏi, một câu trả lời)
    - Kịch bản hỏi đáp đơn giản
    - Không cần lưu trữ lịch sử hội thoại
    - Câu trả lời ngắn gọn, tập trung

    Phù hợp cho:

    - Truy vấn nhanh
    - Yêu cầu dịch thuật
    - Giải thích đơn giản

### 2. Kích hoạt chế độ

Trong file `src/pages/index.astro`, bỏ comment component tương ứng với chế độ bạn muốn sử dụng:

```tsx
<!-- Cho Chat Mode -->
<Chat client:load />

<!-- Cho Completion Mode -->
<Completion client:load />
```

### 3. Cấu hình Model AI

Ứng dụng tự động chọn model AI dựa trên API key có trong file `.env`. Thứ tự ưu tiên:

1. OpenAI (GPT-4o)
2. Anthropic (Claude)
3. Google (Gemini)

Bạn có thể xem và điều chỉnh cấu hình model trong file `src/lib/ai-model.ts`:

## Cấu trúc code - Customize ứng dụng

### Cấu trúc thư mục

```bash
src/
├── assets/                # Chứa ảnh và static assets
├── components/          # React/Astro components
│   └── ui/               # UI components từ shadcn/ui
├── lib/                  # Utilities và shared logic
├── pages/                # Các trang và API routes
│   ├── api/              # API endpoints
│   ├── _Chat.tsx         # Component chat mode
│   └── _Completion.tsx   # Component completion mode
└── styles/                # CSS và style definitions
```

### UI Components

1. **Chat Mode** (`src/pages/_Chat.tsx`):
   - Component xử lý chat nhiều lượt
   - Sử dụng `useChat` hook từ Vercel AI SDK
   - Hỗ trợ markdown và code highlighting

2. **Completion Mode** (`src/pages/_Completion.tsx`):
   - Component xử lý completion đơn lẻ
   - Sử dụng `useCompletion` hook từ Vercel AI SDK
   - UI đơn giản hơn cho tương tác một lượt

### API Endpoints

1. **Chat API** (`src/pages/api/chat.ts`):
   - Xử lý streaming chat responses
   - Thêm context hoặc system prompts

2. **Completion API** (`src/pages/api/completion.ts`):
   - Xử lý single-turn completions
   - Tùy chỉnh prompt templates

> Bạn có thể tạo thêm component/endpoint hoặc edit các component hiện tại để thêm chức năng!

### Customize AI Models

File `src/lib/ai-model.ts` chứa logic khởi tạo và cấu hình AI models:

1. **Thêm model mới**:
```typescript
if (newModelApiKey) {
  const newModel = createNewModel({
    apiKey: newModelApiKey,
    // Cấu hình khác
  });
  return newModel("model-id");
}
```

2. **Tùy chỉnh model settings**:
```typescript
return model("model-id", {
  temperature: 0.7,
  maxTokens: 1000,
  // Các settings khác
});
```

## Công nghệ sử dụng

Boilerplate được xây dựng trên các công nghệ hiện đại:

- [Astro](https://astro.build) - Web framework for content-focused websites
- [React](https://reactjs.org) - UI component library
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [shadcn/ui](https://ui.shadcn.com) - UI component library
- [Vercel AI SDK](https://sdk.vercel.ai/) - SDK for building AI-powered applications