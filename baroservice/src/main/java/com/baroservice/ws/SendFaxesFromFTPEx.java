
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
 *         &lt;element name="FileCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="FileNames" type="{http://ws.baroservice.com/}ArrayOfString" minOccurs="0"/&gt;
 *         &lt;element name="SendCount" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *         &lt;element name="Messages" type="{http://ws.baroservice.com/}ArrayOfFaxMessage" minOccurs="0"/&gt;
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
    "fileCount",
    "fileNames",
    "sendCount",
    "messages",
    "sendDT"
})
@XmlRootElement(name = "SendFaxesFromFTPEx")
public class SendFaxesFromFTPEx {

    @XmlElement(name = "CERTKEY")
    protected String certkey;
    @XmlElement(name = "CorpNum")
    protected String corpNum;
    @XmlElement(name = "SenderID")
    protected String senderID;
    @XmlElement(name = "FileCount")
    protected int fileCount;
    @XmlElement(name = "FileNames")
    protected ArrayOfString fileNames;
    @XmlElement(name = "SendCount")
    protected int sendCount;
    @XmlElement(name = "Messages")
    protected ArrayOfFaxMessage messages;
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
     * fileCount �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getFileCount() {
        return fileCount;
    }

    /**
     * fileCount �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setFileCount(int value) {
        this.fileCount = value;
    }

    /**
     * fileNames �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfString }
     *     
     */
    public ArrayOfString getFileNames() {
        return fileNames;
    }

    /**
     * fileNames �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfString }
     *     
     */
    public void setFileNames(ArrayOfString value) {
        this.fileNames = value;
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
     * messages �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public ArrayOfFaxMessage getMessages() {
        return messages;
    }

    /**
     * messages �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfFaxMessage }
     *     
     */
    public void setMessages(ArrayOfFaxMessage value) {
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
