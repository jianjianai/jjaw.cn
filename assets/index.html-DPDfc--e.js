import{_ as n,o as s,c as a,a as e}from"./app-BnivRIq3.js";const p={},t=e(`<h1 id="java-ping-mc服务器的方法" tabindex="-1"><a class="header-anchor" href="#java-ping-mc服务器的方法"><span>Java Ping Mc服务器的方法</span></a></h1><p>最近搞了个mc服务器检测的项目，于是就在网上查找mc ping的协议。之后就找到了个例子：https://gist.github.com/zh32/7190955</p><p>这个例子是真的好用。我把它简单修改了下，一行代码就可以ping服务器。 其实只是把返回void变成了this</p><div class="language-java" data-highlighter="prismjs" data-ext="java" data-title="java"><pre class="language-java"><code><span class="line"><span class="token class-name">ServerListPing<span class="token punctuation">.</span>StatusResponse</span> pingSata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServerListPing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InetSocketAddress</span><span class="token punctuation">(</span>server<span class="token punctuation">.</span>address<span class="token punctuation">,</span> server<span class="token punctuation">.</span>port<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>这个例子用到了gson，记得添加一个依赖哦</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">dependencies {</span>
<span class="line">    implementation &#39;com.google.code.gson:gson:2.9.0&#39;</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div><p>下面是修改过的例子</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">import com.google.gson.Gson;</span>
<span class="line">import java.io.ByteArrayOutputStream;</span>
<span class="line">import java.io.DataInputStream;</span>
<span class="line">import java.io.DataOutputStream;</span>
<span class="line">import java.io.IOException;</span>
<span class="line">import java.io.InputStream;</span>
<span class="line">import java.io.InputStreamReader;</span>
<span class="line">import java.io.OutputStream;</span>
<span class="line">import java.net.InetSocketAddress;</span>
<span class="line">import java.net.Socket;</span>
<span class="line">import java.util.List;</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> *  https://gist.github.com/zh32/7190955</span>
<span class="line"> * @author zh32 &lt;zh32 at zh32.de&gt;</span>
<span class="line"> */</span>
<span class="line">public class ServerListPing {</span>
<span class="line"></span>
<span class="line">    private InetSocketAddress host;</span>
<span class="line">    private int timeout = 7000;</span>
<span class="line">    private Gson gson = new Gson();</span>
<span class="line"></span>
<span class="line">    public ServerListPing setAddress(InetSocketAddress host) {</span>
<span class="line">        this.host = host;</span>
<span class="line">        return this;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public InetSocketAddress getAddress() {</span>
<span class="line">        return this.host;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    ServerListPing setTimeout(int timeout) {</span>
<span class="line">        this.timeout = timeout;</span>
<span class="line">        return this;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    int getTimeout() {</span>
<span class="line">        return this.timeout;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public int readVarInt(DataInputStream in) throws IOException {</span>
<span class="line">        int i = 0;</span>
<span class="line">        int j = 0;</span>
<span class="line">        while (true) {</span>
<span class="line">            int k = in.readByte();</span>
<span class="line">            i |= (k &amp; 0x7F) &lt;&lt; j++ * 7;</span>
<span class="line">            if (j &gt; 5) throw new RuntimeException(&quot;VarInt too big&quot;);</span>
<span class="line">            if ((k &amp; 0x80) != 128) break;</span>
<span class="line">        }</span>
<span class="line">        return i;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public void writeVarInt(DataOutputStream out, int paramInt) throws IOException {</span>
<span class="line">        while (true) {</span>
<span class="line">            if ((paramInt &amp; 0xFFFFFF80) == 0) {</span>
<span class="line">                out.writeByte(paramInt);</span>
<span class="line">                return;</span>
<span class="line">            }</span>
<span class="line"></span>
<span class="line">            out.writeByte(paramInt &amp; 0x7F | 0x80);</span>
<span class="line">            paramInt &gt;&gt;&gt;= 7;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public StatusResponse fetchData() throws IOException {</span>
<span class="line"></span>
<span class="line">        Socket socket = new Socket();</span>
<span class="line">        OutputStream outputStream;</span>
<span class="line">        DataOutputStream dataOutputStream;</span>
<span class="line">        InputStream inputStream;</span>
<span class="line">        InputStreamReader inputStreamReader;</span>
<span class="line"></span>
<span class="line">        socket.setSoTimeout(this.timeout);</span>
<span class="line"></span>
<span class="line">        socket.connect(host, timeout);</span>
<span class="line"></span>
<span class="line">        outputStream = socket.getOutputStream();</span>
<span class="line">        dataOutputStream = new DataOutputStream(outputStream);</span>
<span class="line"></span>
<span class="line">        inputStream = socket.getInputStream();</span>
<span class="line">        inputStreamReader = new InputStreamReader(inputStream);</span>
<span class="line"></span>
<span class="line">        ByteArrayOutputStream b = new ByteArrayOutputStream();</span>
<span class="line">        DataOutputStream handshake = new DataOutputStream(b);</span>
<span class="line">        handshake.writeByte(0x00); //packet id for handshake</span>
<span class="line">        writeVarInt(handshake, 4); //protocol version</span>
<span class="line">        writeVarInt(handshake, this.host.getHostString().length()); //host length</span>
<span class="line">        handshake.writeBytes(this.host.getHostString()); //host string</span>
<span class="line">        handshake.writeShort(host.getPort()); //port</span>
<span class="line">        writeVarInt(handshake, 1); //state (1 for handshake)</span>
<span class="line"></span>
<span class="line">        writeVarInt(dataOutputStream, b.size()); //prepend size</span>
<span class="line">        dataOutputStream.write(b.toByteArray()); //write handshake packet</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        dataOutputStream.writeByte(0x01); //size is only 1</span>
<span class="line">        dataOutputStream.writeByte(0x00); //packet id for ping</span>
<span class="line">        DataInputStream dataInputStream = new DataInputStream(inputStream);</span>
<span class="line">        int size = readVarInt(dataInputStream); //size of packet</span>
<span class="line">        int id = readVarInt(dataInputStream); //packet id</span>
<span class="line"></span>
<span class="line">        if (id == -1) {</span>
<span class="line">            throw new IOException(&quot;Premature end of stream.&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (id != 0x00) { //we want a status response</span>
<span class="line">            throw new IOException(&quot;Invalid packetID&quot;);</span>
<span class="line">        }</span>
<span class="line">        int length = readVarInt(dataInputStream); //length of json string</span>
<span class="line"></span>
<span class="line">        if (length == -1) {</span>
<span class="line">            throw new IOException(&quot;Premature end of stream.&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (length == 0) {</span>
<span class="line">            throw new IOException(&quot;Invalid string length.&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        byte[] in = new byte[length];</span>
<span class="line">        dataInputStream.readFully(in);  //read json string</span>
<span class="line">        String json = new String(in);</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">        long now = System.currentTimeMillis();</span>
<span class="line">        dataOutputStream.writeByte(0x09); //size of packet</span>
<span class="line">        dataOutputStream.writeByte(0x01); //0x01 for ping</span>
<span class="line">        dataOutputStream.writeLong(now); //time!?</span>
<span class="line"></span>
<span class="line">        readVarInt(dataInputStream);</span>
<span class="line">        id = readVarInt(dataInputStream);</span>
<span class="line">        if (id == -1) {</span>
<span class="line">            throw new IOException(&quot;Premature end of stream.&quot;);</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        if (id != 0x01) {</span>
<span class="line">            throw new IOException(&quot;Invalid packetID&quot;);</span>
<span class="line">        }</span>
<span class="line">        long pingtime = dataInputStream.readLong(); //read response</span>
<span class="line"></span>
<span class="line">        StatusResponse response = gson.fromJson(json, StatusResponse.class);</span>
<span class="line">        response.setTime((int) (now - pingtime));</span>
<span class="line"></span>
<span class="line">        dataOutputStream.close();</span>
<span class="line">        outputStream.close();</span>
<span class="line">        inputStreamReader.close();</span>
<span class="line">        inputStream.close();</span>
<span class="line">        socket.close();</span>
<span class="line"></span>
<span class="line">        return response;</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">    public class StatusResponse {</span>
<span class="line">        private String description;</span>
<span class="line">        private Players players;</span>
<span class="line">        private Version version;</span>
<span class="line">        private String favicon;</span>
<span class="line">        private int time;</span>
<span class="line"></span>
<span class="line">        public String getDescription() {</span>
<span class="line">            return description;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public Players getPlayers() {</span>
<span class="line">            return players;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public Version getVersion() {</span>
<span class="line">            return version;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public String getFavicon() {</span>
<span class="line">            return favicon;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public int getTime() {</span>
<span class="line">            return time;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public void setTime(int time) {</span>
<span class="line">            this.time = time;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public class Players {</span>
<span class="line">        private int max;</span>
<span class="line">        private int online;</span>
<span class="line">        private List&lt;Player&gt; sample;</span>
<span class="line"></span>
<span class="line">        public int getMax() {</span>
<span class="line">            return max;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public int getOnline() {</span>
<span class="line">            return online;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public List&lt;Player&gt; getSample() {</span>
<span class="line">            return sample;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public class Player {</span>
<span class="line">        private String name;</span>
<span class="line">        private String id;</span>
<span class="line"></span>
<span class="line">        public String getName() {</span>
<span class="line">            return name;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public String getId() {</span>
<span class="line">            return id;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    public class Version {</span>
<span class="line">        private String name;</span>
<span class="line">        private String protocol;</span>
<span class="line"></span>
<span class="line">        public String getName() {</span>
<span class="line">            return name;</span>
<span class="line">        }</span>
<span class="line"></span>
<span class="line">        public String getProtocol() {</span>
<span class="line">            return protocol;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre></div>`,8),l=[t];function i(c,r){return s(),a("div",null,l)}const u=n(p,[["render",i],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/2024/2/25/mc-ping-server/","title":"Java Ping Mc服务器的方法","lang":"zh-CN","frontmatter":{"permalinkPattern":"2024/2/25/mc-ping-server/","title":"Java Ping Mc服务器的方法","description":"github上找了个例子，直接复制就完事了。复制粘贴，然后再改改。就变成自己的了，哈哈。","star":false,"tags":["经验"],"comment":true,"head":[["meta",{"property":"og:url","content":"https://jjaw.cn/2024/2/25/mc-ping-server/"}],["meta",{"property":"og:site_name","content":"神奇小破站"}],["meta",{"property":"og:title","content":"Java Ping Mc服务器的方法"}],["meta",{"property":"og:description","content":"github上找了个例子，直接复制就完事了。复制粘贴，然后再改改。就变成自己的了，哈哈。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-15T12:37:18.000Z"}],["meta",{"property":"article:tag","content":"经验"}],["meta",{"property":"article:modified_time","content":"2024-05-15T12:37:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java Ping Mc服务器的方法\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-15T12:37:18.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"isRoot":true,"createdTime":1656604800000,"updatedTime":1715776638000,"contributors":[{"name":"jjaw","email":"jjaw@jjaw.cn","commits":2}]},"excerpt":"\\n<p>最近搞了个mc服务器检测的项目，于是就在网上查找mc ping的协议。之后就找到了个例子：https://gist.github.com/zh32/7190955</p>\\n<p>这个例子是真的好用。我把它简单修改了下，一行代码就可以ping服务器。  其实只是把返回void变成了this</p>\\n<div class=\\"language-java\\" data-highlighter=\\"prismjs\\" data-ext=\\"java\\" data-title=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"line\\"><span class=\\"token class-name\\">ServerListPing<span class=\\"token punctuation\\">.</span>StatusResponse</span> pingSata <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">ServerListPing</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setTimeout</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1000</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">setAddress</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">InetSocketAddress</span><span class=\\"token punctuation\\">(</span>server<span class=\\"token punctuation\\">.</span>address<span class=\\"token punctuation\\">,</span> server<span class=\\"token punctuation\\">.</span>port<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">fetchData</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","github_edit":{"filePathRelative":"articles/1-旧站文章迁移/6-java ping mc服务器的方法/java ping mc服务器的方法.md"}}');export{u as comp,m as data};
