// 方案2：使用 fetch API 发送到你的后端服务器
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // 禁用提交按钮，防止重复提交
    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    try {
        const formData = new FormData(this);
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            alert('Thank you for your message. We will get back to you soon!');
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        alert('Sorry, there was an error sending your message. Please try again later.');
        console.error('Error:', error);
    } finally {
        // 重新启用提交按钮
        submitButton.disabled = false;
        submitButton.textContent = 'Send Message';
    }
}); 