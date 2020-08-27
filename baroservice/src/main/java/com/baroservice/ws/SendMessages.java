
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="CERTKEY" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="CorpNum" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SenderID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *         &lt;element name="SendCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="CutToSMS" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *         &lt;element name="Messages" type="{http://ws.baroservice.com/}ArrayOfXMSMessage" minOccurs="0"/&gt;
 *         &lt;element name="SendDT" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "certkey",
    "corpNum",
    "senderID",
    "sendCount",
    "cutToSMS",
    "messages",
    "sendDT"
})
@XmlRootElement(name = "SendMessages")
public class SendMessages {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "SenderID")
    protected String senderID;
    @XmlElement(name = "SendCount")
    protected int sendCount;
    @XmlElement(name = "CutToSMS")
    protected boolean cutToSMS;
    @XmlElement(name = "Messages")
    protected ArrayOfXMSMessage messages;
    @XmlElement(name = "SendDT")
    protected String sendDT;

    /**
     * certkey �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCERTKEY() {
        return certkey;
    }

    /**
     * certkey �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCERTKEY(String value) {
        this.certkey = value;
    }

    /**
     * corpNum �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCorpNum() {
        return corpNum;
    }

    /**
     * corpNum �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCorpNum(String value) {
        this.corpNum = value;
    }

    /**
     * senderID �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSenderID() {
        return senderID;
    }

    /**
     * senderID �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSenderID(String value) {
        this.senderID = value;
    }

    /**
     * sendCount �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getSendCount() {
        return sendCount;
    }

    /**
     * sendCount �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setSendCount(int value) {
        this.sendCount = value;
    }

    /**
     * cutToSMS �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public boolean isCutToSMS() {
        return cutToSMS;
    }

    /**
     * cutToSMS �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setCutToSMS(boolean value) {
        this.cutToSMS = value;
    }

    /**
     * messages �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfXMSMessage }
     *     
     */
    public ArrayOfXMSMessage getMessages() {
        return messages;
    }

    /**
     * messages �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfXMSMessage }
     *     
     */
    public void setMessages(ArrayOfXMSMessage value) {
        this.messages = value;
    }

    /**
     * sendDT �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSendDT() {
        return sendDT;
    }

    /**
     * sendDT �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSendDT(String value) {
        this.sendDT = value;
    }

}
