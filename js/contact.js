document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value
    };
    
    // 这里可以添加表单验证逻辑
    
    // 这里可以添加发送到服务器的逻辑
    console.log('Form submitted:', formData);
    
    // 显示提交成功消息
    alert('感谢您的留言！我们会尽快回复您。');
    
    // 重置表单
    this.reset();
}); 